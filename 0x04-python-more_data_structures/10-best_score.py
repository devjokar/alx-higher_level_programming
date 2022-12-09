#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary:
        b_score = list(a_dictionary.keys())[0]
        for i in a_dictionary.keys():
            if a_dictionary[i] > a_dictionary.get(b_score):
                b_score = i
        return (b_score)
