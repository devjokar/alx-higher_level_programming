#!/usr/bin/python3
""" Define peak-finding module """


def find_peak(list_of_integers):
    """ Find a peak in an unordered list """
    if list_of_integers == []:
        return None

    size = len(list_of_integers)
    mid = int(size / 2)
    li = list_of_integers
    if mid - 1 < 0 and mid + 1 >= size:
        return li[mid]
    elif mid - 1 < 0:
        return li[mid] if li[mid] > li[mid + 1] else li[mid + 1]
    elif mid + 1 >= size:
        return li[mid] if li[mid] > li[mid - 1] else li[mid - 1]

    if li[mid] > li[mid - 1] and li[mid] > li[mid + 1]:
        return li[mid]
    if li[mid + 1] > li[mid - 1]:
        return find_peak(li[mid:])
    return find_peak(li[:mid])
