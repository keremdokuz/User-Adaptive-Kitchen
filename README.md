# User-Adaptive-Kitchen

## How to start the App:


### 1. install requirements:
run the following command in the app root-folder.
```
pip install -r requirements.txt
```

### 2. install dependencies:
run the following command in the folder where package-lock.json is located (/kitchenapp/frontend/).
This will install add required node modules.
```
npm install
```

### 3. let webpack create the main.js from template including node modules:
run the following command from /kitchenapp/frontend/
```
npm run dev
```

### 4. start the App:
run the following command from /kitchenapp
```
python manage.py runserver
```