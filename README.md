# Annose

**Team Members:** Stanley Huang, Kevin Liu, Gary Li, Jonathan Lin

**Demo Link:** https://youtu.be/c_ER6hF-AXc

**Idea:** An application in which students can join classrooms, upload documents to classrooms, and collaboratively annotate documents. Users have the ability to choose whose annotations they see.


**Models and Description:**

User
* has an email, password, and name
* has many classrooms and annotations
* Users can also be admins to certain Classrooms

Classroom
* has a name, key, and admin ID
* has many documents and users
* the "key" is the method through which other students can join the classroom

Document
* has a name and body text
* belongs to a classroom

Annotation
* has a body, start and end indices
* belongs to a user and a document
* start and end indices signify where in the text the annotation references


**Features:**
* Users can log in
* Users can make classrooms
* Users can add documents to classrooms
* Users can add annotations to documents
* Users can filter whose annotations they see


**Division of Labor:**
* Stanley: Implemented annotations for documents
* Kevin: User authentication and documents
* Gary: Dashboard and classroom front end
* Jonathan: Dashboard and classroom back end
