const INITIALIZED_BOARD_DATA = {
  title: 'my trello',
  lists: [
    {
      title: 'list title',
      cards: [
        {
          title: 'card title',
          description: 'this is card'
        },
        {
          title: 'card title2',
          description: 'this is card2'
        }
      ]
    }
  ]
}

const board = new Board(INITIALIZED_BOARD_DATA)

board.render('.board');
