INSERT INTO public."month"
  (is_active, created_at, updated_at, code, name_en_full, name_en_short, name_th_full, name_th_short)
VALUES 
  ('1'::"bit", now(), now(), '01', 'January', 'Jan', 'มกราคม', 'ม.ค.'),
  ('1'::"bit", now(), now(), '02', 'February', 'Feb', 'กุมภาพันธ์', 'ก.พ.'),
  ('1'::"bit", now(), now(), '03', 'March', 'Mar', 'มีนาคม', 'มี.ค.'),
  ('1'::"bit", now(), now(), '04', 'April', 'Apr', 'เมษายน', 'เม.ย.'),
  ('1'::"bit", now(), now(), '05', 'May', 'May', 'พฤษภาคม', 'พ.ค.'),
  ('1'::"bit", now(), now(), '06', 'June', 'Jun', 'มิถุนายน', 'มิ.ย.'),
  ('1'::"bit", now(), now(), '07', 'July', 'Jul', 'กรกฎาคม', 'ก.ค.'),
  ('1'::"bit", now(), now(), '08', 'August', 'Aug', 'สิงหาคม', 'ส.ค.'),
  ('1'::"bit", now(), now(), '09', 'September', 'Sep', 'กันยายน', 'ก.ย.'),
  ('1'::"bit", now(), now(), '10', 'October', 'Oct', 'ตุลาคม', 'ต.ค.'),
  ('1'::"bit", now(), now(), '11', 'November', 'Nov', 'พฤศจิกายน', 'พ.ย.'),
  ('1'::"bit", now(), now(), '12', 'December', 'Dec', 'ธันวาคม', 'ธ.ค.');
