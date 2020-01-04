from flask import Flask, escape, request, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("front/index.html")


if __name__ == "__main__":
    app.run(port=5002)