## mail_body ← メール本文
## model_path ← モデルの絶対パス
## model_name ← 判定モデルの名前
## vec_name ← ベクトル化モデルの名前

import pickle
import fasttext
from sklearn import svm

## mail_body = sys.argv[1]
## f = open('sample.txt', 'r')
## mail_body = f.read()
## f.close()

## モデル読み込み
model_path = '/content'
vec_model_name = 'cc.ja.300.bin'
svm_model_name = 'ylab_model.sav'
vec_model_path_name = model_path + '/' + vec_model_name
svm_model_path_name = model_path + '/' + svm_model_name

ft = fasttext.load_model(vec_model_path_name)
model = pickle.load(open(svm_model_path_name, 'rb'))

## ベクトル化
vec = ft.get_word_vector(mail_body)
vec_list = [vec]

## 予測
result = model.predict(vec_list)

print(result)