/**
 * Created by bingqinzhou on 3/29/16.
 */

(function(){
    angular.module("WhiteBoardApp")
        .controller("CourseController", CourseController);

    function CourseController($scope,CourseService){

        $scope.selectCourse = selectCourse;

        function selectCourse(id){
            CourseService.findCourseById(id,function(response){
                $scope.course = response;
            });
        }

        CourseService.findAllCourses(function(response){
            $scope.courses = response;
        });

    }
})();
