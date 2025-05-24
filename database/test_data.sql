USE campus_connect;

-- Insert test users (passwords are 'password123')
INSERT INTO users (username, email, password, full_name, course, year_of_study) VALUES
('john_doe', 'john@university.edu', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'John Doe', 'Computer Science', 3),
('jane_smith', 'jane@university.edu', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jane Smith', 'Engineering', 2),
('mike_wilson', 'mike@university.edu', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Mike Wilson', 'Mathematics', 4);

-- Insert test posts
INSERT INTO posts (user_id, title, content, category) VALUES
(1, 'Welcome to Campus Connect!', 'This is our new platform for student connectivity. Feel free to share your thoughts and resources here!', 'announcements'),
(2, 'Study Group for Data Structures', 'Looking for students interested in forming a study group for Data Structures and Algorithms. We can meet every Tuesday and Thursday.', 'academic'),
(3, 'Campus Tech Fest 2025', 'Exciting news! The annual tech fest is coming up next month. Registration starts tomorrow. Don\'t miss out!', 'events');

-- Insert test resources
INSERT INTO resources (user_id, title, description, file_url, file_type, subject) VALUES
(1, 'Data Structures Notes', 'Comprehensive notes covering arrays, linked lists, stacks, and queues', 'https://example.com/ds-notes.pdf', 'pdf', 'Computer Science'),
(2, 'Calculus Formula Sheet', 'Essential formulas for Calculus I and II', 'https://example.com/calculus-formulas.pdf', 'pdf', 'Mathematics'),
(3, 'Programming Best Practices', 'Guide to writing clean and efficient code', 'https://example.com/programming-guide.pdf', 'pdf', 'Computer Science');

-- Insert test post likes (correct table name)
INSERT INTO post_likes (post_id, user_id) VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 2);

-- Insert test comments
INSERT INTO comments (post_id, user_id, content) VALUES
(1, 2, 'Great initiative! Looking forward to using this platform.'),
(1, 3, 'This will definitely help us stay connected.'),
(2, 1, 'I\'m interested in joining the study group!'),
(2, 3, 'Count me in for the Data Structures study group.'),
(3, 2, 'Can\'t wait for the tech fest! Will there be coding competitions?');
