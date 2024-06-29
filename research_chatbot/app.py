from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)
openai.api_key = "sk-proj-lpTxFBzj1pnolTNiwxdpT3BlbkFJmouArL3S1Ld2RFOACBy1"


@app.route('/api', methods=['POST'])

def api():
    data = request.get_json()
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or your specific model
            messages=[{"role": "user", "content": data['prompt']}]
        )
        return jsonify(completion.choices[0].message['content'])
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
