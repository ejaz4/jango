setTimeout (function () {if (done == 0){
try { var settingsbtn = document.createElement("a");
settingsbtn.setAttribute("href", "app-intent:settings");
settingsbtn.innerHTML = '<div class="shadow rounded-lg bg-white dark:bg-gray-750 hover:shadow-lg transition duration-100 ease text-center"><div class="p-5 font-bold text-4xl text-primary"><center><image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAC40lEQVRYCe2Wv08UURSFH5BQiIWxI4EooAWRllhAVDCoFCZgbQ2lFZLFBoLhX9CaPwAqjZ2BGqNLt0sBNP4qJMaoQZD1+5Z5QiY7OBsiCQnknHfuu/fc+4aZ2c2GcPZ3Su/AJ667kuJH9ieCdk5JHx73bdTqQmNd7n1z776EF2hDwpeo6HWph/VegP47yQFvE1VibE2PuWPxCt1FOB1C6IZimGUNxts9QhwxShDzZeK7UHSzzMBV2AVzYxFnHKiW2O9B43V0Ap6DES0E5qxViPXaYxy5QD4XBnHZ9A2dh1vQ/Q46BZtgFqw9obgL7bHXGc5yP0D+SDigiENzARXNLMOwD+ZFP0Z77CUMXrgz37HxDKQ2xklr3EHbYBaGKCzDLwmX0AcwC350nenssSyT+R6WTaixhHbANGZJ+Iz1pDlHLY1OEmWodyOEcA0eiVaqb6ANH1A/EUgVt1k9fBudhL6ILegjaM7arXDwZ6/fkM5aId0Kc+E8rvfQxutoxDKBucdoGgUS1l6jEfZW2DjLCyXMj69Ybb6IRsS3+UJMHFJ9+u2L6Vq5WKtqY3WtvTQkaYcm4V+plYvF2Bf3R2rWBfgIviedVxNVVlzgQ5jGeJKIHrex11m5H0ErnVkv4X1q/vfb6CSML2GB+Bf8DW/AiLpfwh46N6GHlNAOmMYciT2o5zA9fIJ8Gp0kylDvRvjHx9DbqNEvjTbMWRiisAx/wh9wCd6EWWin4MwKOgYz0USlCDUWUNHM4tdqH5oX/RjtsZcw/1ex5kEWL8CP3DzxFnS/g05BLxKpCWt6dqnaY68znOV+gHwuLOKyIbLEPj73dWKftS8gYRW+4easVcjotcc4coF8bvj2+iimw8EPknvEazAOHCGOGCWI+TKxXqT6Y2aGYBV2wWOjkQnPoYfNohFPCcw9Q/Ug+VCXmZHe2leo6HVJGGNrepL0/5HLIQT/21q8RO1E8JlTKimaI3WGU3YH/gBjLNYwtAYWTwAAAABJRU5ErkJggg==" width="24" height="24"></image></center></div><div class="rounded-b-lg py-1.5 w-full border-t text-sm text-gray-500 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-750">Jango Settings</div></div>';
document.getElementsByClassName("grid grid-cols-2 md:grid-cols-6 gap-3")[0].appendChild(settingsbtn); } catch{}
}
done = 1 }, 400);
