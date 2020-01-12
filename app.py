import os

from flask import Flask, render_template, request
from flask_dropzone import Dropzone

basedir = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)

app.config.update(
    UPLOADED_PATH=os.path.join(basedir, 'uploads'),
    # Flask-Dropzone config:
    #DROPZONE_ALLOWED_FILE_TYPE='music',
    DROPZONE_MAX_FILE_SIZE=20,
    DROPZONE_MAX_FILES=1,
    DROPZONE_UPLOAD_ON_CLICK=True
)

dropzone = Dropzone(app)


@app.route('/', methods=['POST', 'GET'])
def upload():
    music_type = request.form.get("type")

    if request.method == 'POST':
        print(music_type)
        
        # for key, f in request.files.items():
        #     if key.startswith('file'):
        #         f.save(os.path.join(app.config['UPLOADED_PATH'], f.filename))
    return render_template('index.html')


# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     music_type = request.form.get("audio-type")

#     if request.method == "POST":
#         print(music_type)

if __name__ == '__main__':
    app.run(debug=True)