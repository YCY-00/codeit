SELECT 
    email, 
    CONCAT(height, 'cm,', weight, 'kg') AS '키, 몸무게',
    weight/(height*height)*10000 AS BMI, 
    (CASE
        WHEN weight IS NULL AND height IS NULL THEN '알 수 없음'
        WHEN weight/(height*height)*10000 >= 25 THEN '과체중 또는 비만'
        WHEN weight/(height*height)*10000 >= 18.5 AND weight/(height*height)*10000 < 25 THEN '정상'
        ELSE '저체중'
    END) AS '결과'
    FROM member WHERE weight IS NOT NULL AND height IS NOT NULL ORDER BY BMI ASC;