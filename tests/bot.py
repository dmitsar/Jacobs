# Подключаем модуль случайных чисел
import random

# Подключаем модуль для Телеграма
import telebot

# Указываем токен
bot = telebot.TeleBot('1261630769:AAGGJuYZKo9plKBoedOEFOnNpDU9pU80tfM')

# Импортируем типы из модуля, чтобы создавать кнопки
from telebot import types

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

def get_text_messages(message):
# Готовим кнопки
    keyboard = types.InlineKeyboardMarkup()
# По очереди готовим текст и обработчик для каждого знака зодиака
    key_oven = types.InlineKeyboardButton(text='Мой тест', callback_data='avtotest')
# И добавляем кнопку на экран
    keyboard.add(key_oven)
# Показываем все кнопки сразу и пишем сообщение о выборе
    bot.send_message(message.from_user.id, text='Привет, что по автотестам.', reply_markup=keyboard)

# Обработчик нажатий на кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    # Если нажали на одну из 12 кнопок — выводим гороскоп
    if call.data == "avtotest":
        # Формируем вывод
        msg = line

        # Отправляем текст в Телеграм
        bot.send_message(call.message.chat.id, msg)


# Запускаем постоянный опрос бота в Телеграме
bot.polling(none_stop=True, interval=0)