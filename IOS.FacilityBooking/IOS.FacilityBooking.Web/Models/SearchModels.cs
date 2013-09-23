using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Globalization;
using System.Web.Security;

namespace IOS.FacilityBooking.Web.Models
{
    public class BasicSearchModel
    {
		[Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date")]
        public string Date { get; set; }

        [Display(Name = "Starting Time")]
        public int StartTimehours { get; set; }

		public int StartTimeminutes { get; set; }

		public int StartTimeAMPM { get; set; }

		[Display(Name = "Ending Time")]
		public string EndTimehours { get; set; }

		public int EndTimeminutes { get; set; }

		public int EndTimeAMPM { get; set; }
    }

	public class AdvanceSearchModel
	{
		[Required]
		[DataType(DataType.Date)]
		[Display(Name = "Starting Date")]
		public string StartDate { get; set; }

		[Required]
		[DataType(DataType.Date)]
		[Display(Name = "Ending Date")]
		public string EndDate { get; set; }

		[Display(Name = "Starting Time")]
		public int StartTimehours { get; set; }

		public int StartTimeminutes { get; set; }

		public int StartTimeAMPM { get; set; }

		[Display(Name = "Ending Time")]
		public string EndTimehours { get; set; }

		public int EndTimeminutes { get; set; }

		public int EndTimeAMPM { get; set; }
	}
}
