# User-Adaptive-Kitchen

## How to start the App:


### 1. install requirements:
run the following command in the app root-folder.
```
pip install -r requirements.txt
```

### 2. install dependencies:
run the following command in the folder where package-lock.json is located (/kitchenapp/vue_frontend/).
This will install add required node modules.
```
npm install
```

### 3. let vue deploy the necessary modules for django to read:
run the following command from /kitchenapp/vue_frontend/
```
npm run serve
```

### 4. start the App:
run the following command from /kitchenapp
```
python manage.py runserver
```
