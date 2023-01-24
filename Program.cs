using System;

namespace _24012023
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num = 45;

            //int[] numbers = { 45, 23, 5 };
            //var numbers = new int[] { 45, 23, 5, 6 };
            //var numbers = new int[4];
            var numbers = new int[4] { 45, 10, 3 ,4};


            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }

            int index = 0;
            while (index<numbers.Length)
            {
                Console.WriteLine(numbers[index]);

                index++;
            }


            numbers = new int[10] { 45, 23, 4, 5, 787, 33, 2, 46, 67, 87 };

            var max = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                    max = numbers[i];
            }

            Console.WriteLine(max);


        }
    }
}
