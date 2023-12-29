export interface course{
    courseid: string,
    coursenName: string,
    teacher: string,
    description: string
}


export interface courseState{
    courses: course[];
}





export const initialState: courseState = {

    courses:[
        {
          "courseid": '1',
          "coursenName": "Introduction to Java Programming",
          "teacher": "John Smith",
          "description": "A comprehensive introduction to Java programming language."
        },
        {
          "courseid": '2',
          "coursenName": "Angular Fundamentals",
          "teacher": "Jane Doe",
          "description": "Learn the basics of Angular framework for web development."
        },
        {
          "courseid": '3',
          "coursenName": "Advanced Java Concepts",
          "teacher": "Michael Johnson",
          "description": "Explore advanced features and concepts in Java programming."
        },
        {
          "courseid":' 4',
          "coursenName": "Web Development with Angular",
          "teacher": "Emily White",
          "description": "Build modern web applications using Angular framework."
        },
        {
          "courseid":' 5',
          "coursenName": "Java Spring Framework",
          "teacher": "David Brown",
          "description": "An in-depth study of the Spring framework for Java applications."
        },
        {
          "courseid": '6',
          "coursenName": "Frontend Development Essentials",
          "teacher": "Sophia Garcia",
          "description": "Essential skills and tools for frontend development."
        },
        {
          "courseid": '7',
          "coursenName": "Java EE Architecture",
          "teacher": "Robert Miller",
          "description": "Understanding the architecture of Java EE for enterprise applications."
        },
        {
          "courseid": '8',
          "coursenName": "Building Scalable Angular Apps",
          "teacher": "Alex Turner",
          "description": "Strategies for building scalable and maintainable Angular applications."
        },
        {
          "courseid": '9',
          "coursenName": "Mobile App Development with Java",
          "teacher": "Grace Martinez",
          "description": "Developing mobile applications using Java for Android."
        },
        {
          "courseid": '10',
          "coursenName": "Testing Angular Applications",
          "teacher": "Daniel Lee",
          "description": "Effective testing practices for Angular applications."
        }
      ]
      
}