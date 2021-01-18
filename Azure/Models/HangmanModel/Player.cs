using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hangman
{
    public class Player
    {

        public Player()
        {
            Letters = new int[26];
        }
        public string OpposingWord { get;set; }
        public string LettersData { get; set; }
        [Key]
        public int PlayerId { get; set; }

        [NotMapped]
        public int[] Letters
        {
            get
            {
                return Array.ConvertAll(LettersData.Split('_'), Int32.Parse);
            }
            set
            {
             
                LettersData = String.Join("_", value.Select(p => p.ToString()).ToArray());
            }
        }
        
        [JsonIgnore]
        public Game Game { get; set; }
        public int GameId { get; set; }
        public int Code { get; set; }
    }
}
