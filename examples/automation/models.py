import requests
# Model for course
##########################################################################


class course(object):

    """represents a course"""

    def __init__(self, id, shortName, name, largeIcon, photo, previewLink, shortDescription, smallIcon, smallIconHover, subtitleLanguagesCsv, isTranslate):
        self.id = id
        self.shortName = shortName
        self.name = name
        self.largeIcon = largeIcon
        self.photo = photo
        self.previewLink = previewLink
        self.shortDescription = shortDescription
        self.smallIcon = smallIcon
        self.smallIconHover = smallIconHover
        self.subtitleLanguagesCsv = subtitleLanguagesCsv
        self.isTranslate = isTranslate

    def __repr__(self):
        return "<Course ID:{}>".format(self.id)

    @classmethod
    def get_course_by_id(self, course_id):
        url = 'https://api.coursera.org/api/catalog.v1/courses?id={}&fields=id,shortName,name,language\
        ,largeIcon,photo,previewLink,shortDescription,smallIcon,smallIconHover,subtitleLanguagesCsv,isTranslate,\
        universityLogo,universityLogoSt,video,videoId,aboutTheCourse,targetAudience,faq,courseSyllabus,courseFormat\
        ,suggestedReadings,instructor,estimatedClassWorkload,aboutTheInstructor,recommendedBackground'.format(course_id)
        course_json = requests.get(url).json()
        course_json = course_json['elements'][0]

        # this method is not pythonic and we should reduce the code....
        p = course(id=course_json['id'], shortName=course_json['shortName'], name=course_json['name'],
                   largeIcon=course_json['largeIcon'], photo=course_json['photo'], previewLink=course_json[
                       'previewLink'], shortDescription=course_json['shortDescription'],
                   smallIcon=course_json[
                       'smallIcon'], smallIconHover=course_json['smallIconHover'],
                   subtitleLanguagesCsv=course_json['subtitleLanguagesCsv'], isTranslate=course_json['isTranslate'])
        return p

##########################################################################

# A better model for course
# A more flexible and pythonic api
##########################################################################


class Course(object):

    """Represents a generic course object in coursera api."""

    def __init__(self, *initial_data, **kwargs):

        includes = ['id', 'aboutTheInstructor', 'aboutTheCourse']
        for dictionary in initial_data:
            for key in dictionary:
                if key in includes:
                     setattr(self, key, dictionary[key])
        for key in kwargs:
            if key in includes:
                setattr(self, key, kwargs[key])

    def __repr__(self):
        return "<Course ID:{}>".format(self.id)

    @classmethod
    def get_course_by_id(self, course_id):
        url = 'https://api.coursera.org/api/catalog.v1/courses?id={}&fields=id,shortName,name,language\
        ,largeIcon,photo,previewLink,shortDescription,smallIcon,smallIconHover,subtitleLanguagesCsv,isTranslate,universityLogo,universityLogoSt,video,videoId,aboutTheCourse,targetAudience,faq,courseSyllabus,courseFormat,suggestedReadings,instructor,estimatedClassWorkload,aboutTheInstructor,recommendedBackground'.format(course_id)
        course_json = requests.get(url).json()
        course_json = course_json['elements'][0]
        course_obj = Course(course_json)
        return course_obj
##########################################################################
