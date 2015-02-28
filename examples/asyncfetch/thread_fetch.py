import threading
import Queue
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


def _read_url(url, queue):
    """
    Requests the urls and puts them in the job queue
    """
    try:
        data = requests.get(url).json()
        queue.put(data)
    except (requests.ConnectionError, AttributeError):
        pass


def fetch_parallel(urls):
    """
    Returns a queue object of the output
    """
    result = Queue.Queue()
    threads = [
        threading.Thread(target=_read_url, args=(url, result)) for url in urls]
    for t in threads:
        t.start()
        # t.daemon = True
    for t in threads:
        t.join()
    return result

# a = fetch_parallel(urls)
# print a.queue

# when we increase the number of urls and requests
a = fetch_parallel(URLS)
print a.queue
