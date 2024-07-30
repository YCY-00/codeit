UPDATE item SET is_deleted = 'Y' WHERE name='남성정장 상하의 세트';
DELETE FROM item WHERE is_deleted='Y' AND DATEDIFF('2020-07-05', upload_date)>365;

SELECT * FROM item;