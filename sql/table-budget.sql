INSERT INTO public."budget"
  (is_active, created_at, updated_at, code, budget_amount)
VALUES 
  ('1'::"bit", now(), now(), 'Mon', 600),
  ('1'::"bit", now(), now(), 'Tue', 600),
  ('1'::"bit", now(), now(), 'Wed', 600),
  ('1'::"bit", now(), now(), 'Thu', 600),
  ('1'::"bit", now(), now(), 'Fri', 600),
  ('1'::"bit", now(), now(), 'Sat', 2000),
  ('1'::"bit", now(), now(), 'Sun', 1000);
