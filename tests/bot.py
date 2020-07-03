# Подключаем модуль случайных чисел
import random
# Подключаем модуль для Телеграма
import telebot
# Модули для отправки по расписанию
import time
import schedule

#from tkinter import *
#tk = Tk()

# Указываем токен
bot = telebot.TeleBot('1261630769:AAGGJuYZKo9plKBoedOEFOnNpDU9pU80tfM')

# Импортируем типы из модуля, чтобы создавать кнопки
#from telebot import types

#jacobs_image = PhotoImage(file='jacobs.png')

# lines = ""
#
# with open('test.txt', 'r', encoding='utf-8') as file:
#     line = file.read()
#     lines += line

# Метод, который получает сообщения и обрабатывает их
@bot.message_handler(content_types=['text'])

# def get_text_messages(message):
#     # Если написали «Привет»
#     if message.text == "с":
#         # Пишем приветствие
#         bot.send_message(message.from_user.id, "Привет, сейчас я расскажу тебе гороскоп на сегодня.")
#         # Готовим кнопки
#         keyboard = types.InlineKeyboardMarkup()
#         # По очереди готовим текст и обработчик для каждого знака зодиака
#         key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='zodiac')
#         # И добавляем кнопку на экран
#         keyboard.add(key_oven)
#         # Показываем все кнопки сразу и пишем сообщение о выборе
#         key_test = types.InlineKeyboardButton(text='test', callback_data='zodiac')
#         bot.send_message(message.from_user.id, text='Выбери свой знак зодиака', reply_markup=keyboard)
#
#     elif message.text == "/help":
#         bot.send_message(message.from_user.id, "Напиши Привет")
#
#     else:
#         bot.send_message(message.from_user.id, "Я тебя не понимаю. Напиши /help.")

def test():
# Готовим кнопки
    #keyboard = types.InlineKeyboardMarkup()
# По очереди готовим текст и обработчик для каждого знака зодиака
    #key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='avtotest')
# И добавляем кнопку на экран
# keyboard.add(key_oven)
# Показываем все кнопки сразу и пишем сообщение о выборе
    doc = open('jacobs.png', 'rb')
    bot.send_photo(-1001248165287, doc, "test") #298385761
    #bot.send_message(message.from_user.id, text='Привет, что по автотестам.')
schedule.every(3).seconds.do(test)
while True:
     schedule.run_pending()
     time.sleep(1)

# Запускаем постоянный опрос бота в Телеграме
bot.polling(none_stop=True, interval=0)

