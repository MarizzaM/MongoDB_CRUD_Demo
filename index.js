const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected...'))
    .catch(err => console.error('Connection failed...', err));

// Defining a schema 
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Marizza',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

createCourse();

async function getCourses(){
    const courses = await Course
        .find({author: 'Marizza',  isPublished: true})
        .limit(10)
        .sort({name: 1});
    console.log(courses);
}

getCourses();
