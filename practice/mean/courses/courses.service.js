/**
 * Created by bingqinzhou on 3/29/16.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .factory("CourseService",CourseService);

    function CourseService($http){

        var service = {
            findAllCourses:findAllCourses,
            findCourseById:findCourseById
        };
        return service;

        function findAllCourses(callback){
            $http.get("/rest/course")
                .success(callback);
        }

        function findCourseById(id,callback){
            $http.get("/rest/course/"+id)
                .success(callback);
        }

    }
})();
