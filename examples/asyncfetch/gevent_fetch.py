import grequests
import requests

urls = [
    'http://hacker-news.firebaseio.com/v0/item/8964451.json',
    'http://hacker-news.firebaseio.com/v0/item/8961438.json',
    'http://hacker-news.firebaseio.com/v0/item/8967339.json',
    'http://hacker-news.firebaseio.com/v0/item/8971058.json',
]

URLS = [
    'http://hacker-news.firebaseio.com/v0/item/8964451.json',
    'http://hacker-news.firebaseio.com/v0/item/8961438.json',
    'http://hacker-news.firebaseio.com/v0/item/8967339.json',
    'http://hacker-news.firebaseio.com/v0/item/8971058.json',
    'http://hacker-news.firebaseio.com/v0/item/8964451.json',
    'http://hacker-news.firebaseio.com/v0/item/8961438.json',
    'http://hacker-news.firebaseio.com/v0/item/8967339.json',
    'http://hacker-news.firebaseio.com/v0/item/8971058.json',
    'http://hacker-news.firebaseio.com/v0/item/8964451.json',
    'http://hacker-news.firebaseio.com/v0/item/8961438.json',
    'http://hacker-news.firebaseio.com/v0/item/8967339.json',
    'http://hacker-news.firebaseio.com/v0/item/8971058.json',
    'http://hacker-news.firebaseio.com/v0/item/8964451.json',
    'http://hacker-news.firebaseio.com/v0/item/8961438.json',
    'http://hacker-news.firebaseio.com/v0/item/8967339.json',
    'http://hacker-news.firebaseio.com/v0/item/8971058.json',
]


def fetch_event(urls):
    """
    This parallel fetcher uses gevent one uses gevent
    """
    rs = (grequests.get(u) for u in urls)
    return [content.json() for content in grequests.map(rs)]

print fetch_event(urls)
# print fetch_event(URLS)
