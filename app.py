import os

from flask import Flask, render_template, request, url_for
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


spleeter_command = ""

@app.route('/', methods=['POST', 'GET'])
def upload():
    music_type = request.form.get("type")


    def stems(x):
        return {
            'vocals': "2stems",
            'instrumental': "3stems",
            'vocals-drums': "4stems",
            'drums': "5stems",
        }[x]
        
    if request.method == 'POST':
        print(music_type)
        for key, f in request.files.items():
            if key.startswith('file'):
                f.save(os.path.join(app.config['UPLOADED_PATH'], f.filename))
                global spleeter_command
                spleeter_command = str("spleeter separate -i " + str(os.path.join(app.config['UPLOADED_PATH'], f.filename)) + " -o audio_output -p spleeter:" + stems(music_type) + "-16kHz")
                # run_spleeter()
    return render_template('index.html')




@app.route('/spleeter',  methods=['POST', 'GET'])
def run_spleeter():
    print("IDZIE DALEJ")
    print(spleeter_command)
    return spleeter_command


@app.route('/submit', methods=['POST', 'GET'])
def submit_file():
    print("wysyla plik")
    
    
    
    


# @app.route("/forward/", methods=['POST'])
# def move_forward():
#     if request.method == 'POST':
#     #Moving forward code
#         print("idzie")
#         return render_template('index.html')


# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     music_type = request.form.get("audio-type")

#     if request.method == "POST":
#         print(music_type)

if __name__ == '__main__':
    app.run(debug=True)