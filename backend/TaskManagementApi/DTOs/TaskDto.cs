using System;

namespace TaskManagementApi.DTOs
{
    // Student ID: 00012122
    public class TaskDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
        public bool IsCompleted { get; set; }
        public int UserId { get; set; }
    }
}
