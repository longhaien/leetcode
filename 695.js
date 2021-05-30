// 695. 岛屿的最大面积

// 广度搜索，深度搜索

var maxAreaOfIsland = function (grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(dfs(grid, i, j), max);
    }
  }
  return max;
};


var dfs = function (grid, cur_i, cur_j) {
  // 判断好所有边界条件
  if (cur_i < 0 || cur_j < 0 || cur_i >= grid.length || cur_j >= grid[0].length || grid[cur_i][cur_j] == 0) {
    return 0;
  }

  let area = 1;
  grid[cur_i][cur_j] = 0; // 遍历过的地方不再遍历

  // 遍历当前位置上下左右的地方是不是土地
  const next_i = [-1, 1, 0, 0];
  const next_j = [0, 0, -1, 1];
  for (let index = 0; index < 4; index++) {
    area += dfs(grid, next_i[index] + cur_i, next_j[index] + cur_j);
  }
  return area;
}