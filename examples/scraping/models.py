# Hacker news api with one method
##########################################################################
HACKER_NEWS_URL = 'https://news.ycombinator.com/'


class User(object):

    """Represents a user in hacker news"""

    def __init__(self, id, created, karma, avg, about):
        self.id = id
        self.created = created
        self.karma = karma
        self.avg = avg
        self.about = about

    def __repr__(self):
        return "<PRODUCT ID:{}>".format(self.id)

    @classmethod
    def get(self, user_id):
        USER_URL = HACKER_NEWS_URL + "user?id={}".format(user_id)
        page_html = requests.get(USER_URL).text
        soup = BeautifulSoup(page_html)
        form = soup.find('form', {'method': 'post'})
        # get the user data from the table
        content = form.find('table')
        tr = content.findAll('tr')
        user = tr[0].findAll('td')[1].string
        created = tr[1].findAll('td')[1].string
        karma = int(tr[2].findAll('td')[1].string)
        avg = float(tr[3].findAll('td')[1].string)
        about = tr[4].findAll('td')[1].string
        return User(id=user, created=created, karma=karma, avg=avg, about=about)


# Models for Product hunt
##########################################################################
import requests
from bs4 import BeautifulSoup

PAGE_URL = 'http://www.producthunt.com'


class PH(object):

    """Represents a product hunt object"""

    def __init__(self):
        self.anything = []

    @classmethod
    def an_api_method(self):
        """This api method will list the objects in the front page and parse them to the product model"""
        page_html = requests.get(PAGE_URL).text
        soup = BeautifulSoup(page_html)
        content = soup.find('div', class_='main-content')
        products_html = content.findAll('li', class_='post')
        products = []
        for product_html in products_html:
            id = product_html.find('div', class_="upvote")['data-vote-id']
            try:
                upvote = int(
                    product_html.find('span', class_="vote-count").string)
            except:
                upvote = None
            url = product_html.find('div', class_="url").a['href']
            link = PAGE_URL + url
            tagline = product_html.find(
                'span', class_="post-tagline description").string
            title = product_html.find('div', class_="url").a.string
            p = Product(
                id=id, upvote=upvote, title=title, link=link, tagline=tagline)
            products.append(p)
        return products


class Product(object):

    """Represents a product from the front page of the product"""

    def __init__(self, id, upvote, title, link, tagline):
        self.id = id
        self.upvote = upvote
        self.title = title
        self.link = link
        self.tagline = tagline

    def __repr__(self):
        return "<PRODUCT ID:{}>".format(self.id)


##########################################################################
