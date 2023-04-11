# beer-app

Развернуть при помощи CLI в вебе:<br/> 
1. Склонируйте репозиторий.  
2. Установите зависимости: npm install  
3. Инициализируйте Capacitor: npx cap init  
4. Синхронизируйте проект Capacitor: npx cap sync  
5. Разверните приложение: npx cap serve  

Собрать debug apk под Android:  
1. npx cap add android  
2. npx cap sync  
3. Откройте проект в Android Studio: npx cap open android  
4. В Android Studio выберете build, а затем: Build Bundle(s) / APK(s)" и "Build APK(s).  
5. Отладочный apk-файл готов, находится по пути 'app/build/outputs/apk/debug/'  
