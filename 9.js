
<// 定义角色
const roles = [
  { name: '神', power: 10 },
  { name: '祭祀', power: 3 },
  { name: '鬼', power: 6 },
  { name: '勇士', power: 7 },
  { name: '战士', power: 5 },
  { name: '平民', power: 1 },
];

// 随机选择对手
function getRandomOpponent() {
  return roles[Math.floor(Math.random() * roles.length)];
}

// 显示角色列表
function displayRoles() {
  console.log('请选择一个角色：');
  roles.forEach((role, index) => {
    console.log(`${index + 1}. ${role.name}`);
  });
}

// 获取用户输入
function getUserInput() {
  return new Promise((resolve) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    displayRoles();

    rl.question('请输入角色序号：', (input) => {
      const index = parseInt(input) - 1;
      if (index >= 0 && index < roles.length) {
        resolve(roles[index]);
      } else {
        console.log('输入错误，请重新输入。');
        resolve(getUserInput());
      }
      rl.close();
    });
  });
}

// 比较玩家和对手的力量
function comparePower(player, opponent) {
  if (player.power > opponent.power) {
    console.log(`恭喜！${player.name}击败了${opponent.name}！`);
  } else if (player.power < opponent.power) {
    console.log(`很遗憾，${player.name}输给了${opponent.name}。`);
  } else {
    console.log(`哎呀，${player.name}和${opponent.name}实力相当，平局了。`);
  }
}

// 游戏主循环
async function main() {
  const player = await getUserInput();
  const opponent = getRandomOpponent();
  console.log(`你选择了${player.name}，你的对手是${opponent.name}。`);
  comparePower(player, opponent);
}/ ＞

// 开始游戏
main();
