# Serving index.html and starting WebSocket server

> put `index.html` and `server.py` in same folder

## Library/Dependencies

1. [Python 3.6 and above](https://www.python.org/)

2. [python-socketio](https://python-socketio.readthedocs.io/en/latest/server.html)

```bash
pip install python-socketio #see https://python-socketio.readthedocs.io/en/latest/server.html
```

3. [aiohttp](https://docs.aiohttp.org/en/stable/)

```bash
pip install aiohttp #see https://docs.aiohttp.org/en/stable/
```

## Running server

```bash
cd [to-directory-where-server.py-is-in]

python server.py
# or
python3 server.py
```

## Serving index.html

```bash
cd [to-directory-where-index.html-is-in]

python -m http.server 80
# or
python3 -m http.server 80
```

go to http://localhost:80 to see index.html, our Crazy Button in action

Open two or more browser windows to see the button moving in realtime and scores being updated
