USE campus_connect;

-- Delete data in reverse order due to foreign key constraints
DELETE FROM post_likes;
DELETE FROM comments;
DELETE FROM resources;
DELETE FROM posts;
DELETE FROM users;

-- Reset auto-increment counters
ALTER TABLE users AUTO_INCREMENT = 1;
ALTER TABLE posts AUTO_INCREMENT = 1;
ALTER TABLE resources AUTO_INCREMENT = 1;
ALTER TABLE comments AUTO_INCREMENT = 1;
ALTER TABLE post_likes AUTO_INCREMENT = 1;
