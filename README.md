# AngularPart1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Homework

## Requirement 1
改造service从api获取数据

1. 将StudentService上的getStudents和getStudent方法用HttpClient改造
2. 修改StudentListComponent和StudentDetailComponent组件的Init钩子方法，改为订阅http返回的结果。
3. 捕获getStudent的异常并

## Requirement 2
改造app添加NgRx状态管理工具来维护数据

1. 创建loadStudent和setStudent的ActionCreator。
2. 创建StudentReducer，需要响应loadStudents和setStudents Action。
3. 修改StudentListComponent和StudentDetailComponent组件，不注入Service改为注入Store，订阅Store上的selector来获取数据。
4. StudentListComponent的Init钩子中dispatch出loadStudents Action。
5. 创建LoadStudentEffect监听loadStudents Action，调用StudentService的getStudents方法从api获取数据，输出setStudents Action。
6. 在AppModule中加载StoreModule和EffectsModule模块。
