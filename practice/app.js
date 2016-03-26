/**
 * Created by bingqinzhou on 3/12/16.
 */
(function (){

    angular.module("WhiteBoardApp",[])
        .controller("CourseController",CourseController);

    function CourseController($scope,$http,CourseService)
    {
        CourseService.readAllCourses(renderCourses);

        function renderCourses(response){
            $scope.courses = response;
        }

        $scope.selectCourse = selectCourse;
        $scope.removeCourse = removeCourse;
        $scope.updateCourse = updateCourse;
        $scope.createCourse = createCourse;

        function createCourse(course)
        {
            CourseService.createCourse(course, renderCourses);

        }

        function updateCourse(course){
            CourseService.updateCourseById($scope.selectedIndex,course,renderCourses);

        }

        function removeCourse(index){

            CourseService.deleteCourseById(index,renderCourses);
        }

        function selectCourse(index){

            $scope.selectedIndex = index;

            CourseService.readOneCourseById(index,function(response)
            {
                $scope.course = response;
            });

        }


    }


})();
