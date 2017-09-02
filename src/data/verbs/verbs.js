const verbs = [
    {
        "name": "parlare",
        "translation": "to speak",
        "regular": "true",
        "aux_verb": "avere",
        "past_participle": "",
        "gerund": "",
        "conjugation": 1,
        "present_stem": "",
        "future_stem": ""
    }, 
    {
        "name": "cominciare",
        "regular": true
    },
    {
        "name": "cercare",
        "regular": true
    },
    {   "name": "vendere",
        "translation": "to sell",
        "regular": "regular",
        "past_participle": "venduto",
        "gerund": "vendendo",
        "aux_verb": "avere",
        "conjugation": 2,
        "present_stem": "vend",
        "future_stem": "vender"
    }, 
    {   "name": "dormire",
        "type": 1,
        "translation": "to sleep",
        "regular": "regular",
        "past_participle": "dormito",
        "gerund": "dormendo",
        "aux_verb": "avere",
        "conjugation": 3,
        "present_stem": "dorm",
        "future_stem": "dormir"
    },
    {   "name": "capire",
        "type": 2,
        "translation": "to know",
        "regular": "regular",
        "past_participle": "capito",
        "gerund": "capendo",
        "aux_verb": "avere",
        "conjugation": 3,
        "present_stem": "cap",
        "future_stem": "capir"
    },
    {   "name": "andare",
        "translation": "to go",
        "regular": false,
        "past_participle": "andato",
        "gerund": "andando",
        "aux_verb": "avere",
        "tenses": {
            "presente": ["vado", "via", "va", "andiamo", "andate", "vanno"]
        }   
    }
]

export default verbs;