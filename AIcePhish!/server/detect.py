import asyncio
import websockets
import pickle
import fasttext
from sklearn import svm

async def handler(websocket):
    async for message in websocket:
        print("recieve")
        print(message)
        res = ""
        if(message[:4] == "Mode"):
            res = "WHICH"
            print("Mode Asked")
        elif(message[:4] == "Text"):
            #判定開始
            mail_body = message[5:]
            print("text =" + mail_body)
            ## mail_body ← メール本文
            ## ベクトル化
            vec = ft.get_word_vector(mail_body)
            vec_list = [vec]

            ## 予測
            #ans: __label__human or __label__AI
            ans = model.predict(vec_list)
            print(ans)
            if(ans == "__label__AI"):
                res = "True"
            elif(ans == "__label__human"):
                res = "False"
            else:
                res = "Error"
            print("res = " + res)
        else:
            print("UNDEFINED TOKEN ERROR")
        await websocket.send(res)

async def main():
   async with websockets.serve(handler, "0.0.0.0", 10000):
        await asyncio.Future() # do do do do do...


## モデル読み込み
ft = fasttext.load_model('cc.ja.300.bin')
model = pickle.load(open('model.sav', 'rb'))
print("load done")

asyncio.run(main())