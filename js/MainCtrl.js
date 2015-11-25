app.controller('MainCtrl', function ($scope) {
    $scope.today = new Date();
    $scope.saved = localStorage.getItem('taskItems');
    $scope.taskItem = (localStorage.getItem('taskItems') !== null) ?
    JSON.parse($scope.saved) : [
        { task: "Ultimate Chocolate Cake!", date: $scope.today, category: "Extreme", complete: false },
	    { task: "Learn more UI Bootstrap", date: $scope.today, category: "Important", complete: false }
    ];
    localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));

    $scope.taskID = null;
    $scope.newTask = null;
    //$scope.progress = 0;
    $scope.newTaskDate = null;
    $scope.categories = [
        { name: 'Extreme' },
        { name: 'Important' },
        { name: 'NoRush' },
        { name: 'DONE' },
    ];

    $scope.getTotalTaskItem = function () {
        return $scope.taskItem.length;
    };

    //Progress bar
    //$scope.change = function (index, progress) {
     //   $scope.taskItem[index].progress = progress;
     //   localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    //};

    $scope.newTaskCategory = $scope.categories;

    $scope.addNew = function () {
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.newTaskDate = "Anytime";
            }
        
        $scope.taskItem.push({
            taskId: $scope.getTotalTaskItem()+1,
            task: $scope.newTask,
            date: $scope.newTaskDate,
           // progress:$scope.progress,
            complete: false,
            category: $scope.newTaskCategory.name
            })
      
        $scope.taskId = '';
        $scope.newTask = '';
        $scope.newTaskDate = '';
       // $scope.progress = '';
        $scope.newTaskCategory = $scope.categories;
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };

    $scope.deleteTask = function () {
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
        angular.forEach(completedTask, function (taskItem) {
            if (!taskItem.complete) {
                $scope.taskItem.push(taskItem);
            }
        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };

    $scope.save = function () {
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    }
});