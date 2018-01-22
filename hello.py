from flask import Flask, render_template, request  # 追加
from os.path import join,relpath
from glob import glob
app = Flask(__name__)


@app.route('/')
def hello():
    name = "Hoge"
    # return name
    return render_template('hello.html', title='flask test', name=name) #変更

@app.route('/photo')
def photo():
    name="Huga"
    title="photo_test"
    path = "./static/img"
    image_names = [relpath(x,path) for x in glob(join(path,'*.png'))]
    my_list = []
    for image in image_names:
        my_dic = {}
        my_dic['image_name'] = path + image
        my_list.append(my_dic)
    return render_template('photo.html',title=title,name=name,message=my_list)

# おまじない
if __name__ == "__main__":
    app.run(debug=True)
