class Urls:
    url_prefix = '/katara'

    urls_map = {
        'tasks': r"%s/tasks/(?P<task_id>[^/]+)",
        'tasks_collection': r"%s/tasks",
        'recipients': r"%s/recipients/(?P<recipient_id>[^/]+)",
        'recipients_collection': r"%s/recipients",
        'reports': r"%s/reports/(?P<report_id>[^/]+)",
        'reports_collection': r"%s/reports",
        'schedules': r"%s/schedules/(?P<schedule_id>[^/]+)",
        'schedules_collection': r"%s/schedules",
        'swagger': r'%s/swagger/(.*)'
    }

    def __init__(self):
        for k, v in self.urls_map.items():
            self.__setattr__(k, v % self.url_prefix)


class UrlsV2(Urls):
    url_prefix = '/katara/v2'


urls_v2 = UrlsV2()
