"use strict";
document.write('<h1 style="color: blue;">HomeWork-18</h1>');
document.write('<h2 style="color: darkblue;">Введение в ООП</h2>');

/* Tasc №
Условие:
Реализуйте сущность Worker (Работник), который будет иметь следующие свойства: 
- name (имя), 
- surname (фамилия), 
- rate (ставка за день работы), 
- days (количество отработанных дней).
Также сущность должна иметь метод getSalary(), который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
Так же добавить несколько ролей. Администратор, Кассир, Консультант.
И добавить для каждого уникальные свойства.

Учесть все 4 принципа ООП:
Абстракция
Наследование
Полиморфизм
Инкапсуляция
Решение:
*/

const worker = {
    name: '',
    surname: '',
    id: '',
    rate: '',
    days: '',
    getSalary: () => {},
    role: '',
    currentCash: '',
}

admin(cashier){
    workNumber: '',
}

cashier(worker){
    cashDeskNumber: '',
    getSalary: (id) => {
        return worker.rate * worker.days * 1.75
    },
}

consult(worker){
    department: '',
    getSalary: (id) => {
        return worker.rate * worker.days * 1.25
    }
}

const workers = () => {
    let workers = 3

    return ({
        add: (step = 1) => workers += step,
        remove : () => workers--,
        display: () => console.log(workers),
    })
}

let user = workers();


//-----------ООП----------
/*
Абстракция
user(login/email, password, name, id, logout(), role)
Наследование
const user = {
    email: '',
    password: '',
    name: '',
    id: '',
    logout: () => {},
    role: '',
    getListHomeWorks: () => {},
    getListGroup: () => {},
}
admin(user){
    getListGroup: () => {
        return []
    },
}
dir(admin){
    changeGroup: (id) => {
        return status
    },
}
teacher(user){
    addHomeWorks: () => {},
    getListGroup: (id) => {
        return []
    },
}
students(user){
    photo: '',
    uploadHomeWorks: () => {},
    getMyRank: () => {},
    getListGroup: () => {
        return null
    },
}

students.getListGroup()
teacher.getListGroup()
admin.getListGroup()
Инкапсуляция

const addCount = () => {
    let count = 0;
    let flag = true;
    return ({
        add: (step = 1) => {
            console.log(flag)
            if(flag) {
                if(count >= 100) flag = false;
                count += step
            }
        } ,
        remove: () => count--,
        getCount: () => count
    })
}

const test = addCount()
console.log(test.getCount())
test.add()
test.add()
test.add()
test.add()
test.add(10)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
test.add(11)
console.log(test.getCount())

const a = {
    name: 'Vasya',
    age: 30,
    getTest: function () {
        console.log('testing', this.test)
    }
}
const b = {
    gender: 'male',
    working: true,
    __proto__: a
}
const c = {
    test: [],
    __proto__: b
}

console.log('c => ', c)

const user = {
    login: 'Vasya',
    password: '',
    checkPass: function () {
        if(this.password.length > 10){
            return true
        } else {
            return false
        }
        return this.password.length > 10
    }
}

user.password = 'fsddfgdf'

const profile = {
    name: 'Vasya',
    age: 20,
    changePass: function(pass){
        user.password = pass
    },
    __proto__: user
}
profile.changePass('dddddddddd')
console.log(user)
console.log(profile)
*/