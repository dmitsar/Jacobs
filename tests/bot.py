import random
import telebot
import time
import schedule

#from tkinter import *
#tk = Tk()

bot = telebot.TeleBot('1261630769:AAGGJuYZKo9plKBoedOEFOnNpDU9pU80tfM')

# Импортируем типы из модуля, чтобы создавать кнопки
#from telebot import types

#jacobs_image = PhotoImage(file='jacobs.png')

from telebot import types
#jacobs_image = PhotoImage(file='jacobs.png')

from telebot import types
#jacobs_image = PhotoImage(file='jacobs.png')

# lines = ""
#
# with open('test.txt', 'r', encoding='utf-8') as file:
#     line = file.read()
#     lines += line

@bot.message_handler(content_types=['text'])

def photoMessage():
# Готовим кнопки
    #keyboard = types.InlineKeyboardMarkup()

# По очереди готовим текст и обработчик для каждого знака зодиака
    #key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='avtotest')
# И добавляем кнопку на экран
    #key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='avtotest')
# кнопку на экран

#key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='avtotest')
# кнопку на экран
# keyboard.add(key_oven)
    doc = open('jacobs.png', 'rb')
    bot.send_photo(-1001248165287, doc, "screen") #298385761
    #bot.send_message(message.from_user.id, text='ТЕСТ')
schedule.every(1800).seconds.do(photoMessage)
while True:
     schedule.run_pending()
     time.sleep(1)

# Постоянный опрос бота в Телеграме
bot.polling(none_stop=True, interval=0)

