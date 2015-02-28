##########################################################################


def using_your_api():
    products = PH.an_api_method()
    print "This method is a simple representation of your data and the api you are providing.\n"
    for product in products[:10]:
        print 'title:{0}    upvotes:{1}'.format(product.title, product.upvote)
        print 'tagline:', product.tagline
        print "link:", product.link
        print '---'

# Most of the time what you build from an api is a representation of the data.
##########################################################################

if __name__ == '__main__':
    """Extra work for relative import stuffs"""
    if __package__ is None:
        import sys
        from os import path
        sys.path.append(path.dirname(path.dirname(path.abspath(__file__))))
        from models import PH
        using_your_api()
