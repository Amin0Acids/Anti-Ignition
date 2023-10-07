import csv


def fetch_csv(url):
    with open(url) as f:
        reader = csv.reader(f)
        data = list(reader)
    return data
