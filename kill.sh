kill -9 $(ps -fea | grep 'node index.js' | awk '{print $2}')

