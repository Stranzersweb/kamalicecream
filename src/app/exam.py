logs= ['0:start:0','1:start:2','1:end:5','0:end:6']
newdict={}

for i in range(len(logs)):
    
    new=logs[i].split(':')
    if new[0] not in newdict:
        newdict[new[0]]=int(new[2])
    else:
        if new[1]=='start':
            newdict[new[0]]=int(new[2])
        else:
            newdict[new[0]]=int(new[2])-newdict[new[0]]+1
            
            
    
    
print(newdict)