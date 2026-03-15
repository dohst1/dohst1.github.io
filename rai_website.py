# Dohst23 - rai_website - main python script (v0.1.0)
print("\n\n\n - - - Dohst23 - - - \n\n\n\n")

dohst_error = {
    "main": "ERROR D - 0 ",

    "unknown": "1 ",
    "invalid_data": "2 ",
    "skill_issue": "3 ",
}


class rai_website():
    def __init__(self):
        while True:
            print("\n\n --- rai_website --- \n\n\n")
            mode = input("--Mode: ")

            if mode == "" or mode == "exit":
                break

            elif mode == "create array":
                self.create_new_array()

            else: print("invalid input \n")
    
    def create_new_array(self):
        print("\n--create_new_array--\n\n")
        try:
            settings = input("-Settings (title, sub_array_count, sub_array_elements_count, [element_titles])\n : ")
            #settings = settings.split("/")
            settings = settings.split(", ", 3)
            settings[3] = settings[3][1:-1]
            settings[3] = settings[3].split(", ")
            print(settings)

            new_array = []
            new_array.append(settings[3])

            for i in range(1, int(settings[1])+1):
                print(f"sub array {i}:")
                while True:
                    sub_array = []
                    for j in range(len(settings[3])):
                        element = input(f"element {j} {settings[3][j]}: ")
                        sub_array.append(element)
                    if input() == "": break

                print(f"completed: {sub_array}")
                new_array.append(sub_array)

            print(f"-completed:\n {settings[0]} = {new_array}\n")
            print(f"{settings[0]} = [")
            for i in range(len(new_array)): print(new_array[i] + ", ")
            print("]")


        except TypeError:
            print(dohst_error["main"] + dohst_error["skill_issue"])



""" content = [
    // newest first
    // shift all (except preset) down when adding new
    [001, "name", "description", "version", "link"], // preset """

rai_website()

# amazonsmp, 15, 5, [name, description, version, link, required]
# amazonsmp, 33, 5, [name, description, version, link, required]
