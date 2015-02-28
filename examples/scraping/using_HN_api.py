##########################################################################

from pprint import pprint


def using_your_api():
    """Calling a random user like jl."""
    user = User.get('jl')

    pprint(user.__dict__)

# Most of the websites now a days give json representation.
# So, This is a json representation of your data.
##########################################################################

if __name__ == '__main__':
    """Extra work for relative import stuffs"""
    if __package__ is None:
        import sys
        from os import path
        sys.path.append(path.dirname(path.dirname(path.abspath(__file__))))
        from models import User
        using_your_api()
