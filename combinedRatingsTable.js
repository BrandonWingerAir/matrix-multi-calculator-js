const ratingsTableMap = new Map([
    [ 10, { 10: 19 } ],
    [ 19, { 10: 27, 20: 35, 30: 43, 40: 51, 50: 60, 60: 68, 70: 76, 80: 84, 90: 92 }],
    [ 20, { 10: 28, 20: 36, 30: 44, 40: 52, 50: 60, 60: 68, 70: 76, 80: 84, 90: 92 }],
    [ 21, { 10: 29, 20: 37, 30: 45, 40: 53, 50: 61, 60: 68, 70: 76, 80: 84, 90: 92 }],
    [ 22, { 10: 30, 20: 38, 30: 45, 40: 53, 50: 61, 60: 69, 70: 77, 80: 84, 90: 92 }],
    [ 23, { 10: 31, 20: 38, 30: 46, 40: 54, 50: 62, 60: 69, 70: 77, 80: 85, 90: 92 }],
    [ 24, { 10: 32, 20: 39, 30: 47, 40: 54, 50: 62, 60: 70, 70: 77, 80: 85, 90: 92 }],
    [ 25, { 10: 33, 20: 40, 30: 48, 40: 55, 50: 63, 60: 70, 70: 78, 80: 85, 90: 93 }],
    [ 26, { 10: 33, 20: 41, 30: 48, 40: 56, 50: 63, 60: 70, 70: 78, 80: 85, 90: 93 }],
    [ 27, { 10: 34, 20: 42, 30: 49, 40: 56, 50: 64, 60: 71, 70: 78, 80: 85, 90: 93 }],
    [ 28, { 10: 35, 20: 42, 30: 50, 40: 57, 50: 64, 60: 71, 70: 78, 80: 86, 90: 93 }],
    [ 29, { 10: 36, 20: 43, 30: 50, 40: 57, 50: 65, 60: 72, 70: 79, 80: 86, 90: 93 }],
    [ 30, { 10: 37, 20: 44, 30: 51, 40: 58, 50: 65, 60: 72, 70: 79, 80: 86, 90: 93 }],
    [ 31, { 10: 38, 20: 45, 30: 52, 40: 59, 50: 66, 60: 72, 70: 79, 80: 86, 90: 93 }],
    [ 32, { 10: 39, 20: 46, 30: 52, 40: 59, 50: 66, 60: 73, 70: 80, 80: 86, 90: 93 }],
    [ 33, { 10: 40, 20: 46, 30: 53, 40: 60, 50: 67, 60: 73, 70: 80, 80: 87, 90: 93 }],
    [ 34, { 10: 41, 20: 47, 30: 54, 40: 60, 50: 67, 60: 74, 70: 80, 80: 87, 90: 93 }],
    [ 35, { 10: 42, 20: 48, 30: 55, 40: 61, 50: 68, 60: 74, 70: 81, 80: 87, 90: 94 }],
    [ 36, { 10: 42, 20: 49, 30: 55, 40: 62, 50: 68, 60: 74, 70: 81, 80: 87, 90: 94 }],
    [ 37, { 10: 43, 20: 50, 30: 56, 40: 62, 50: 69, 60: 75, 70: 81, 80: 87, 90: 94 }],
    [ 38, { 10: 44, 20: 50, 30: 57, 40: 63, 50: 69, 60: 75, 70: 81, 80: 88, 90: 94 }],
    [ 39, { 10: 45, 20: 51, 30: 57, 40: 63, 50: 70, 60: 76, 70: 82, 80: 88, 90: 94 }],
    [ 40, { 10: 46, 20: 52, 30: 58, 40: 64, 50: 70, 60: 76, 70: 82, 80: 88, 90: 94 }],
    [ 41, { 10: 47, 20: 53, 30: 59, 40: 65, 50: 71, 60: 76, 70: 82, 80: 88, 90: 94 }],
    [ 42, { 10: 48, 20: 54, 30: 59, 40: 65, 50: 71, 60: 77, 70: 83, 80: 88, 90: 94 }],
    [ 43, { 10: 49, 20: 54, 30: 60, 40: 66, 50: 72, 60: 77, 70: 83, 80: 89, 90: 94 }],
    [ 44, { 10: 50, 20: 55, 30: 61, 40: 66, 50: 72, 60: 78, 70: 83, 80: 89, 90: 94 }],
    [ 45, { 10: 51, 20: 56, 30: 62, 40: 67, 50: 73, 60: 78, 70: 84, 80: 89, 90: 95 }],
    [ 46, { 10: 51, 20: 57, 30: 62, 40: 68, 50: 73, 60: 78, 70: 84, 80: 89, 90: 95 }],
    [ 47, { 10: 52, 20: 58, 30: 63, 40: 68, 50: 74, 60: 79, 70: 84, 80: 89, 90: 95 }],
    [ 48, { 10: 53, 20: 58, 30: 64, 40: 69, 50: 74, 60: 79, 70: 84, 80: 90, 90: 95 }],
    [ 49, { 10: 54, 20: 59, 30: 64, 40: 69, 50: 75, 60: 80, 70: 85, 80: 90, 90: 95 }],
    [ 50, { 10: 55, 20: 60, 30: 65, 40: 70, 50: 75, 60: 80, 70: 85, 80: 90, 90: 95 }],
    [ 51, { 10: 56, 20: 61, 30: 66, 40: 71, 50: 76, 60: 80, 70: 85, 80: 90, 90: 95 }],
    [ 52, { 10: 57, 20: 62, 30: 66, 40: 71, 50: 76, 60: 81, 70: 86, 80: 90, 90: 95 }],
    [ 53, { 10: 58, 20: 62, 30: 67, 40: 72, 50: 77, 60: 81, 70: 86, 80: 91, 90: 95 }],
    [ 54, { 10: 59, 20: 63, 30: 68, 40: 72, 50: 77, 60: 82, 70: 86, 80: 91, 90: 95 }],
    [ 55, { 10: 60, 20: 64, 30: 69, 40: 73, 50: 78, 60: 82, 70: 87, 80: 91, 90: 96 }],
    [ 56, { 10: 60, 20: 65, 30: 69, 40: 74, 50: 78, 60: 82, 70: 87, 80: 91, 90: 96 }],
    [ 57, { 10: 61, 20: 66, 30: 70, 40: 74, 50: 79, 60: 83, 70: 87, 80: 91, 90: 96 }],
    [ 58, { 10: 62, 20: 66, 30: 71, 40: 75, 50: 79, 60: 83, 70: 87, 80: 92, 90: 96 }],
    [ 59, { 10: 63, 20: 67, 30: 71, 40: 75, 50: 80, 60: 84, 70: 88, 80: 92, 90: 96 }],
    [ 60, { 10: 64, 20: 68, 30: 72, 40: 76, 50: 80, 60: 84, 70: 88, 80: 92, 90: 96 }],
    [ 61, { 10: 65, 20: 69, 30: 73, 40: 77, 50: 81, 60: 84, 70: 88, 80: 92, 90: 96 }],
    [ 62, { 10: 66, 20: 70, 30: 73, 40: 77, 50: 81, 60: 85, 70: 89, 80: 92, 90: 96 }],
    [ 63, { 10: 67, 20: 70, 30: 74, 40: 78, 50: 82, 60: 85, 70: 89, 80: 93, 90: 96 }],
    [ 64, { 10: 68, 20: 71, 30: 75, 40: 78, 50: 82, 60: 86, 70: 89, 80: 93, 90: 96 }],
    [ 65, { 10: 69, 20: 72, 30: 76, 40: 79, 50: 83, 60: 86, 70: 90, 80: 93, 90: 97 }],
    [ 66, { 10: 69, 20: 73, 30: 76, 40: 80, 50: 83, 60: 86, 70: 90, 80: 93, 90: 97 }],
    [ 67, { 10: 70, 20: 74, 30: 77, 40: 80, 50: 84, 60: 87, 70: 90, 80: 93, 90: 97 }],
    [ 68, { 10: 71, 20: 74, 30: 78, 40: 81, 50: 84, 60: 87, 70: 90, 80: 94, 90: 97 }],
    [ 69, { 10: 72, 20: 75, 30: 78, 40: 81, 50: 85, 60: 88, 70: 91, 80: 94, 90: 97 }],
    [ 70, { 10: 73, 20: 76, 30: 79, 40: 82, 50: 85, 60: 88, 70: 91, 80: 94, 90: 97 }],
    [ 71, { 10: 74, 20: 77, 30: 80, 40: 83, 50: 86, 60: 88, 70: 91, 80: 94, 90: 97 }],
    [ 72, { 10: 75, 20: 78, 30: 80, 40: 83, 50: 86, 60: 89, 70: 92, 80: 94, 90: 97 }],
    [ 73, { 10: 76, 20: 78, 30: 81, 40: 84, 50: 87, 60: 89, 70: 92, 80: 95, 90: 97 }],
    [ 74, { 10: 77, 20: 79, 30: 82, 40: 84, 50: 87, 60: 90, 70: 92, 80: 95, 90: 97 }],
    [ 75, { 10: 78, 20: 80, 30: 83, 40: 85, 50: 88, 60: 90, 70: 93, 80: 95, 90: 98 }],
    [ 76, { 10: 78, 20: 81, 30: 83, 40: 86, 50: 88, 60: 90, 70: 93, 80: 95, 90: 98 }],
    [ 77, { 10: 79, 20: 82, 30: 84, 40: 86, 50: 89, 60: 91, 70: 93, 80: 95, 90: 98 }],
    [ 78, { 10: 80, 20: 82, 30: 85, 40: 87, 50: 89, 60: 91, 70: 93, 80: 96, 90: 98 }],
    [ 79, { 10: 81, 20: 83, 30: 85, 40: 87, 50: 90, 60: 92, 70: 94, 80: 96, 90: 98 }],
    [ 80, { 10: 82, 20: 84, 30: 86, 40: 88, 50: 90, 60: 92, 70: 94, 80: 96, 90: 98 }],
    [ 81, { 10: 83, 20: 85, 30: 87, 40: 89, 50: 91, 60: 92, 70: 94, 80: 96, 90: 98 }],
    [ 82, { 10: 84, 20: 86, 30: 87, 40: 89, 50: 91, 60: 93, 70: 95, 80: 96, 90: 98 }],
    [ 83, { 10: 85, 20: 86, 30: 88, 40: 90, 50: 92, 60: 93, 70: 95, 80: 97, 90: 98 }],
    [ 84, { 10: 86, 20: 87, 30: 89, 40: 90, 50: 92, 60: 94, 70: 95, 80: 97, 90: 98 }],
    [ 85, { 10: 87, 20: 88, 30: 90, 40: 91, 50: 93, 60: 94, 70: 96, 80: 97, 90: 99 }],
    [ 86, { 10: 87, 20: 89, 30: 90, 40: 92, 50: 93, 60: 94, 70: 96, 80: 97, 90: 99 }],
    [ 87, { 10: 88, 20: 90, 30: 91, 40: 92, 50: 94, 60: 95, 70: 96, 80: 97, 90: 99 }],
    [ 88, { 10: 89, 20: 90, 30: 92, 40: 93, 50: 94, 60: 95, 70: 96, 80: 98, 90: 99 }],
    [ 89, { 10: 90, 20: 91, 30: 92, 40: 93, 50: 95, 60: 96, 70: 97, 80: 98, 90: 99 }],
    [ 90, { 10: 91, 20: 92, 30: 93, 40: 94, 50: 95, 60: 96, 70: 97, 80: 98, 90: 99 }],
    [ 91, { 10: 92, 20: 93, 30: 94, 40: 95, 50: 96, 60: 96, 70: 97, 80: 98, 90: 99 }],
    [ 92, { 10: 93, 20: 94, 30: 94, 40: 95, 50: 96, 60: 97, 70: 98, 80: 98, 90: 99 }],
    [ 93, { 10: 94, 20: 94, 30: 95, 40: 96, 50: 97, 60: 97, 70: 98, 80: 99, 90: 99 }],
    [ 94, { 10: 95, 20: 95, 30: 96, 40: 96, 50: 97, 60: 98, 70: 98, 80: 99, 90: 99 }]
]);