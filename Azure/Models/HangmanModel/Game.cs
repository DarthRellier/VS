using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Hangman
{

    public class Game
    {
        public Game() : this(1) { }
        public Game(int gameId)
        {
            GameId = gameId;
            Players = new List<Player>();
        }
        
        public List<Player> Players { get; set; }

        [Key]
        public int GameId { get; set; }
    }
}
